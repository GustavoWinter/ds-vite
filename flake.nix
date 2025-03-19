{
  description = "DS - Vite";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
  };

  outputs = { self, nixpkgs }: 
    let 
      system = builtins.currentSystem;
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_22
        ];

        shellHook = ''
        '';
      };
    };
}