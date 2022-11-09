export class data{
   public static async request(path:string,method:string,bodyObject:any){
    let url:string ='http://localhost:9191';
    let init: RequestInit = {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      method,
      body: JSON.stringify(bodyObject)
  }

      if (init.method === "GET") {
        delete init['body']
      }

    let response = await fetch(url+path,init)
    console.log(bodyObject)
     let result = await response.json()
     return result
  }
}