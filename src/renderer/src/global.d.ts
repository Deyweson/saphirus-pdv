interface IApi {
  haveUsers: () => Promise<boolean>
}

interface Window {
  api: IApi
}
