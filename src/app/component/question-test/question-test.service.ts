import {Injectable} from '@angular/core';
import {PrincipalService} from '../../services/principal.service';
import {Observable, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionTestService extends PrincipalService {
  route = 'question-test';

  updateQuestion(questions) {
    return this.postCustom(`update/solved`, questions);
  }

  uploadAsset(params, file): Observable<any> {
    return this.postFile(`uploadAsset/${params}`, file);
  }

  deleteAsset(id: any): Observable<any> {
    return this.delete(`deleteAsset/${id}`);
  }
}
