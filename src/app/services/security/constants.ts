import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
  })
};
