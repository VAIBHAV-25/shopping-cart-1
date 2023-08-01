export interface Product {
    p_name: string;
    p_id: number;
    p_cost: number;
    p_availability: number;
    p_details?: string;
    p_image:any;
    p_category?: string;
    quantity?: number; // Added quantity field
  }