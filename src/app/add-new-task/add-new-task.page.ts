import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  categorias: any = [];

  nombreTarea: any;
  fechaTarea: any;
  prioridadTarea: any;
  categoriaTarea: any;

  newTaskObject = {};
  taskObject: any;

  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }

  ngOnInit() {
    this.categorias.push('Trabajo');
    this.categorias.push('Personal');
    this.categorias.push('Hogar');
  }

  async dismis() {
    await this.modalCtrl.dismiss(this.taskObject);
  }

  categoriaSeleccionada(index: any) {
    this.categoriaTarea = this.categorias[index];
  }

  adicionarTarea() {
    this.taskObject = ({
      nombreItem: this.nombreTarea,
      fechaItem: this.fechaTarea,
      prioridadItem: this.prioridadTarea,
      categoriaItem: this.categoriaTarea
    })

    this.dismis();
  }

}
