import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-image',
  templateUrl: './save-image.component.html',
  styleUrls: ['./save-image.component.scss']
})
export class SaveImageComponent {
  constructor(private httpClient: HttpClient) { }
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  //Chamado quando o usuario seleciona uma imagem
  public onFileChanged(event) {
    //Seleciona imagem
    this.selectedFile = event.target.files[0];
  }
  //Chamado quando o usuario clica em submit para atualizar a imagem
  onUpload() {
    console.log(this.selectedFile);

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
    //chamado quando o usuário clica no botão de recuperação de imagem para obter a imagem do backend
    getImage() {
    //Chama o Spring para pegar os Bytes da imagem
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}
