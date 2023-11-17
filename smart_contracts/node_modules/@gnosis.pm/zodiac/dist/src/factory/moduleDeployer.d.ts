import { Provider } from "@ethersproject/providers";
import { ethers, Contract, Signer } from "ethers";
import { ModuleProxyFactory__factory } from "../../abi-typechain-types";
import { SupportedNetworks } from "./contracts";
import { KnownContracts } from "./types";
type ABI = any[] | readonly any[];
type TxAndExpectedAddress = {
    transaction: {
        data: string;
        to: string;
        value: ethers.BigNumber;
    };
    expectedModuleAddress: string;
};
/**
 * Get the transaction for deploying a module proxy through the Module Proxy Factory.
 * This will also initialize the module proxy by calling the setup function.
 *
 * @param moduleName Name of the module to deploy (must be present in `KnownContracts`)
 * @param setupArgs The arguments for the setup function of the module
 * @param provider
 * @param chainId
 * @param saltNonce
 * @returns the transaction and the expected address of the module proxy
 */
export declare const deployAndSetUpModule: (moduleName: KnownContracts, setupArgs: {
    types: Array<string>;
    values: Array<any>;
}, provider: Provider, chainId: number, saltNonce: string) => TxAndExpectedAddress;
/**
 * Get the transaction for deploying a module proxy through the Module Proxy Factory.
 * This will also initialize the module proxy by calling the setup function.
 *
 * This method is for modules that do not have a mastercopy listed in the `KnownContracts`
 * @param mastercopyAddress address of the mastercopy to use
 * @param abi abi of the module
 * @param setupArgs The arguments for the setup function of the module
 * @param provider
 * @param chainId
 * @param saltNonce
 * @returns the transaction and the expected address of the module proxy
 */
export declare const deployAndSetUpCustomModule: (mastercopyAddress: string, abi: ABI, setupArgs: {
    types: Array<string>;
    values: Array<any>;
}, provider: Provider, chainId: number, saltNonce: string) => TxAndExpectedAddress;
export declare const calculateProxyAddress: (moduleFactory: Contract, mastercopyAddress: string, initData: string, saltNonce: string) => string;
export declare const getModuleInstance: <T extends KnownContracts>(moduleName: T, moduleAddress: string, provider: Provider | Signer) => ReturnType<{
    bridge: typeof import("../../abi-typechain-types").Bridge__factory;
    circulatingSupplyERC20: typeof import("../../abi-typechain-types").CirculatingSupplyErc20__factory;
    circulatingSupplyERC721: typeof import("../../abi-typechain-types").CirculatingSupplyErc721__factory;
    delay: typeof import("../../abi-typechain-types").Delay__factory;
    erc20Votes: typeof import("../../abi-typechain-types").Erc20Votes__factory;
    erc721Votes: typeof import("../../abi-typechain-types").Erc721Votes__factory;
    exit: typeof import("../../abi-typechain-types").ExitErc20__factory;
    exitERC721: typeof import("../../abi-typechain-types").ExitErc721__factory;
    factory: typeof ModuleProxyFactory__factory;
    metaGuard: typeof import("../../abi-typechain-types").MetaGuard__factory;
    optimisticGovernor: typeof import("../../abi-typechain-types").OptimisticGovernor__factory;
    ozGovernor: typeof import("../../abi-typechain-types").OzGovernor__factory;
    realityERC20: typeof import("../../abi-typechain-types").RealityErc20__factory;
    realityETH: typeof import("../../abi-typechain-types").RealityEth__factory;
    roles: typeof import("../../abi-typechain-types").Roles__factory;
    scopeGuard: typeof import("../../abi-typechain-types").ScopeGuard__factory;
    tellor: typeof import("../../abi-typechain-types").Tellor__factory;
    multisendEncoder: typeof import("../../abi-typechain-types").MultisendEncoder__factory;
    permissions: typeof import("../../abi-typechain-types").Permissions__factory;
    connext: typeof import("../../abi-typechain-types").Connext__factory;
}[T]["connect"]>;
export declare const getModuleFactoryAndMasterCopy: <T extends KnownContracts>(moduleName: T, provider: Provider, chainId: SupportedNetworks) => {
    moduleFactory: import("./types").ModuleProxyFactory;
    moduleMastercopy: ReturnType<{
        bridge: typeof import("../../abi-typechain-types").Bridge__factory;
        circulatingSupplyERC20: typeof import("../../abi-typechain-types").CirculatingSupplyErc20__factory;
        circulatingSupplyERC721: typeof import("../../abi-typechain-types").CirculatingSupplyErc721__factory;
        delay: typeof import("../../abi-typechain-types").Delay__factory;
        erc20Votes: typeof import("../../abi-typechain-types").Erc20Votes__factory;
        erc721Votes: typeof import("../../abi-typechain-types").Erc721Votes__factory;
        exit: typeof import("../../abi-typechain-types").ExitErc20__factory;
        exitERC721: typeof import("../../abi-typechain-types").ExitErc721__factory;
        factory: typeof ModuleProxyFactory__factory;
        metaGuard: typeof import("../../abi-typechain-types").MetaGuard__factory;
        optimisticGovernor: typeof import("../../abi-typechain-types").OptimisticGovernor__factory;
        ozGovernor: typeof import("../../abi-typechain-types").OzGovernor__factory;
        realityERC20: typeof import("../../abi-typechain-types").RealityErc20__factory;
        realityETH: typeof import("../../abi-typechain-types").RealityEth__factory;
        roles: typeof import("../../abi-typechain-types").Roles__factory;
        scopeGuard: typeof import("../../abi-typechain-types").ScopeGuard__factory;
        tellor: typeof import("../../abi-typechain-types").Tellor__factory;
        multisendEncoder: typeof import("../../abi-typechain-types").MultisendEncoder__factory;
        permissions: typeof import("../../abi-typechain-types").Permissions__factory;
        connext: typeof import("../../abi-typechain-types").Connext__factory;
    }[T]["connect"]>;
};
export {};
