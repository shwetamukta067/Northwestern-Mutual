/*import { PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { IUsers } from './user';

@pipe({
    name:'userFilter'
})

export class userFilterPipe implements PipeTransform {
    transform(users: IUsers[], searchTerm: string):IUsers[] {
        if(!users || !searchTerm ) {
            return users;
        }
        return users.filter(users =>
            users.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}*/
