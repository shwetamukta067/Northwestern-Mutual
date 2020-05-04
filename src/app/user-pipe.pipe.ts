import { IUsers } from './user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'userFilter'})

export class userFilterPipe implements PipeTransform {
    transform(users: IUsers[], searchTerm: string):IUsers[] {
        if(!users || !searchTerm ) {
            return users;
        }
        return users.filter(user =>
            user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}