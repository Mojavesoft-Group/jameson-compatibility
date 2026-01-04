return {
    // Metadata
    id: "jameson-compat", // the id of the mod
    name: "Jameson Compatibility", // human-readable name
    description: "Patch Snap! to support Jameson-only primitives. Does not include Jameson libraries.", // description
    version: "1.0", // version
    author: "mojavesoft.net", // author
    depends: [], // dependencies (mod ids, useful for libraries)
    doMenu: true, // whether to add a menu item

    // Main function - gets ran when the mod is loaded
    main(api) {
        // Jameson UUID v4 generation and WebCrypto access
        SnapExtensions.primitives.set(
            'generate_uuid()',
            function() {
                return self.crypto.randomUUID();
            }
        );

        SnapExtensions.primitives.set(
            'uuid_available()',
            function() {
                return Boolean(self?.crypto?.randomUUID);
            }
        );

        SnapExtensions.primitives.set(
            'webcrypto_available()',
            function() {
                return Boolean(self.crypto);
            }
        );

    },

    // Cleanup functions - get ran when the mod is "deleted"
    cleanupFuncs: [
        // ...
    ],
}