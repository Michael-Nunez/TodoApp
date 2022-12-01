import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList: any = [];
    /*[

      {
        itemName: 'Programando',
        itemDeuDate: '11-29-22',
        itemPriority: 'Alta',
        itemCategory: 'Proyectos'
      },
      {
        itemName: 'Diseñando',
        itemDeuDate: '12-15-22',
        itemPriority: 'Baja',
        itemCategory: 'Diseños'
      },
      {
        itemName: 'Comprando',
        itemDeuDate: '12-18-22',
        itemPriority: 'Intermedia',
        itemCategory: 'Personales'
      },
      {
        itemName: 'Ejercitando',
        itemDeuDate: '12-21-22',
        itemPriority: 'Alta',
        itemCategory: 'Personales'
      }
    ]*/

  today: number = Date.now();

  constructor(public modalCtrl: ModalController) {}

  async AddTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    });

    modal.onDidDismiss().then(newTaskObj => {
      //console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data);
    })
    return await modal.present();
  }

  delete(index: any) {
    this.todoList.splice(index, 1);
  }

}
