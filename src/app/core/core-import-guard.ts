export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `O ${moduleName} já foi carregado! Você só pode usar ele uma única vez, sendo dentro de um único Module.`
    );
  }
}
