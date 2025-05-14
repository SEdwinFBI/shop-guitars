import { db } from './../../utils/guitarrs';
export type guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

// export const fetchGuittars = async(): Promise<guitarr[]>=>{
//     return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(db);
//         }, 1000); 
//       })
// }
export const fetchGuittars = (): guitar[]=>{
    return db
}

