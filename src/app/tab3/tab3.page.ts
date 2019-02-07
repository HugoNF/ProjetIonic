import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
    constructor(public actionSheetController: ActionSheetController) {}

    async testactionsheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Albums',
            buttons: [{
                text: 'Supprimer',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                    console.log('Delete clicked');
                }
            }, {
                text: 'Ajouter',
                icon: 'share',
                handler: () => {
                    console.log('Share clicked');
                }
            }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }
}
