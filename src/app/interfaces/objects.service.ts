

export interface publish {
  local_id: number;
  code: string;
  title: string;
  date: string;
  description: string;
  details: {
    size_model: {
      height: number;
      width: number;
      length: number;
      units: string;

    };
    weight_model: string;
    print_time: string;
    
    number_of_parts: string;
    
  };
  cost: {
    material: string;
    material_cost: number;
    minute_cost: number;
    total_cost: number;
  };

  search_reference: string[];
  download_link: string;
  image: string;
  

}


