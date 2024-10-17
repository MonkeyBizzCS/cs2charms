import { CEconItemPreviewDataBlock } from "../proto/generated/CEconItemPreviewDataBlock";
import crc32 from 'crc';


export function createInpsectLink(
    defIndex: number,
    rarity: number,
    quality: number,
    paintSeed: number,
    keychains: any[],
  ): string {
    const proto = CEconItemPreviewDataBlock.create({
        defindex: defIndex,
        rarity: rarity,
        quality: quality,
        paintseed: paintSeed,
        keychains: keychains,
      });

    const encodedProto = CEconItemPreviewDataBlock.encode(proto).finish();
   
    const buffer = new Uint8Array(1 + encodedProto.length);
    buffer[0] = 0; // Write default byte
    buffer.set(encodedProto, 1); // Copy encoded proto into buffer
     
      const crc = crc32.crc32(buffer);
      const xoredCrc = (crc & 0xffff) ^ (encodedProto.length * crc);
        
      let checksumBytes = new Uint8Array(4);
      new DataView(checksumBytes.buffer).setUint32(0, xoredCrc, false);

      const finalBuffer = new Uint8Array(buffer.length + checksumBytes.length);
      finalBuffer.set(buffer);
      finalBuffer.set(checksumBytes, buffer.length);

      return `${CsActionFunction} ${Array.from(finalBuffer).map(byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

const CsActionFunction: string = "steam://rungame/730/76561202255233023/+csgo_econ_action_preview";