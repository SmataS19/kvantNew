import { publish } from './objects.service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvisionalDatabaseService {

    public publications: publish[] = [];

    constructor() {

        this.publications = [
        {
            local_id: 1,
            title: 'Caja de engranajes',
            code: 'GEARBOX',
            date: '2021-01-01',
            description: 'Caja de engranajes para motorreductor',
            details: {
              size_model: {
                height: 50,
                width: 50,
                length: 50,
                units: 'mm'
              },
              weight_model: '50g',
              print_time: '2h',
              number_of_parts: '1'
            },
            cost: {
              material: 'PLA',
              material_cost: 1.5,
              minute_cost: 0.5,
              total_cost: 2.5
            },
            search_reference: ['engranaje', 'motorreductor', 'caja'],
            download_link: 'https://www.thingiverse.com/thing:123456',
            image: 'https://www.thingiverse.com/thing:123456/renders'
          },
          {
            local_id: 2,
            title: 'Soporte de cámara',
            code: 'CAMERA_SUPPORT',
            date: '2021-01-02',
            description: 'Soporte para cámara de seguridad',
            details: {
              size_model: {
                height: 100,
                width: 100,
                length: 100,
                units: 'mm'
              },
              weight_model: '100g',
              print_time: '3h',
              number_of_parts: '2'
            },
            cost: {
              material: 'PETG',
              material_cost: 2.0,
              minute_cost: 0.6,
              total_cost: 3.2
            },
            search_reference: ['cámara', 'seguridad', 'soporte'],
            download_link: 'https://www.thingiverse.com/thing:123457',
            image: 'https://www.thingiverse.com/thing:123457/renders'

          }, {
            local_id: 3,
            title: 'Tu corazon',
            code: 'CORAZON_ROTO',
            date: '2021-01-02',
            description: 'Roto como lo dejo tu ex',
            details: {
              size_model: {
                height: 100,
                width: 100,
                length: 100,
                units: 'mm'
              },
              weight_model: '100g',
              print_time: '3h',
              number_of_parts: '2'
            },
            cost: {
              material: 'Carnita de corazon',
              material_cost: 2.0,
              minute_cost: 0.6,
              total_cost: 0.0
            },
            search_reference: ['brokenheart', 'mevoyaponermamao', 'soporteemocional'],
            download_link: 'https://www.thingiverse.com/thing:123457',
            image: 'https://www.thingiverse.com/thing:123457/renders'

          }
        ];

    }

}
