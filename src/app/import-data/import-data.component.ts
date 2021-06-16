import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service'
@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

  shortLink: string = "";
  loading: boolean = false;
  file: File = null;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.file = event.target.files[0];
}

// OnClick of button Upload
onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
}

}
