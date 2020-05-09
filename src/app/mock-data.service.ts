import { Injectable } from '@angular/core';

interface  MockData {
  id: number
  name: string
}
@Injectable({
  providedIn: 'root'
})

export class MockDataService {
  private data:MockData[] = [
    {
      id:1,
      name:'Phet'
    },
    {
      id:2,
      name:'Phet2'
    }
  ]
  constructor() { }

  getMockData():MockData[]{
    return this.data
  }
}
