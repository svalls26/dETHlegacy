import { factories } from "../../abi-typechain-types";
import { KnownContracts } from "./types";
export declare enum SupportedNetworks {
    Mainnet = 1,
    GnosisChain = 100,
    Goerli = 5,
    ArbitrumOne = 42161,
    Optimism = 10,
    Polygon = 137,
    Mumbai = 80001,
    Avalanche = 43114,
    BinanceSmartChain = 56,
    HardhatNetwork = 31337
}
export declare const MasterCopyAddresses: Record<KnownContracts, string>;
export declare const ContractAddresses: Record<SupportedNetworks, Record<KnownContracts, string>>;
export declare const ContractAbis: Record<KnownContracts, any>;
export declare const ContractFactories: {
    bridge: typeof factories.Bridge__factory;
    circulatingSupplyERC20: typeof factories.CirculatingSupplyErc20__factory;
    circulatingSupplyERC721: typeof factories.CirculatingSupplyErc721__factory;
    delay: typeof factories.Delay__factory;
    erc20Votes: typeof factories.Erc20Votes__factory;
    erc721Votes: typeof factories.Erc721Votes__factory;
    exit: typeof factories.ExitErc20__factory;
    exitERC721: typeof factories.ExitErc721__factory;
    factory: typeof factories.ModuleProxyFactory__factory;
    metaGuard: typeof factories.MetaGuard__factory;
    optimisticGovernor: typeof factories.OptimisticGovernor__factory;
    ozGovernor: typeof factories.OzGovernor__factory;
    realityERC20: typeof factories.RealityErc20__factory;
    realityETH: typeof factories.RealityEth__factory;
    roles: typeof factories.Roles__factory;
    scopeGuard: typeof factories.ScopeGuard__factory;
    tellor: typeof factories.Tellor__factory;
    multisendEncoder: typeof factories.MultisendEncoder__factory;
    permissions: typeof factories.Permissions__factory;
    connext: typeof factories.Connext__factory;
};
export declare const MasterCopyInitData: Record<KnownContracts, {
    initCode: string;
    salt: string;
}>;
