import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class Housing {
  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../../assets/images/K1-with_pistol_grip.png',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '../../assets/images/J16-BT_Rear_Side_White_02.png',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: '../../assets/images/T3HC_Pro_front_and_rear_angle_view-2.png',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../../assets/images/K15_Front.png',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: '../../assets/images/T3Pro_pistol_grip-angle_view_1.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: '../../assets/images/T30_Front.png',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '../../assets/images/T3Pro pistol grip.png',
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },

    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: '../../assets/images/K1-Front.png',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '../../assets/images/J15_Front.png',
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: '../../assets/images/J15_Front.png',
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
  constructor() {}

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log('Application submitted!');
  }
}
