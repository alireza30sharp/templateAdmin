import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIURI } from 'src/app/api-uri';
/*import * as _mls from "@models/index";*/

@Injectable({
  providedIn: 'root'
})
export class UploadService   {
  constructor(private http: HttpClient) {

  }



/**
 *uploads files
 *
 *
 * */
  //public InsertFile(params: _mls.InsertFilesModel) {

  //  const body = new FormData();
  //  body.append('Category', params.Category as string);
  //  body.append('Title', params.Title as string);
  //  body.append('Note', params.Note as string);
  //  body.append('File', params.File as string);


  //  return this.http.post<any>(APIURI.filesUploads.insertFile, body);
  //}


  gatFileByGuid(fileId: any) {
    //return this.http.get(`${APIURI.filesUploads.getFileByGuid}/${fileId}`, { responseType: 'text' });
  }

}
