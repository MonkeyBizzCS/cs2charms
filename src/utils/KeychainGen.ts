import { createInpsectLink } from "./InspectGen";

export function generateKeyChainInspectUrl(pattern: number, keychainId: number, rarity: number): string {
    const keychains = [
        {
          slot: 0,
          stickerId: keychainId,
          pattern: pattern,
        },
      ];

    return createInpsectLink(1355, rarity, 4, pattern, keychains);
}