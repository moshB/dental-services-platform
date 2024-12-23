export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      citys: {
        Row: {
          id: number
          Town_City: string | null
        }
        Insert: {
          id?: number
          Town_City?: string | null
        }
        Update: {
          id?: number
          Town_City?: string | null
        }
        Relationships: []
      }
      clinics: {
        Row: {
          Address_1: string | null
          Address_2: string | null
          Also_Known_As: string | null
          Caring: boolean | null
          County: string | null
          "CQC_Location ID (for office use only)": string | null
          CQC_Provider_Office_Use_Only: string | null
          Current_ServiceView: string | null
          Dentist_Type: string | null
          Diagnostic_Procedures: string | null
          Effective: boolean | null
          fakelat: number | null
          fakelong: number | null
          id: number
          Latitude: number | null
          Local_Authority: string | null
          Longitude: number | null
          Name: string | null
          Paragraphs_Assessment: string | null
          Paragraphs_Routine: string | null
          People_Experience: string | null
          Phone_Number: number | null
          Postcode: string | null
          Provider_Name: string | null
          Region: string | null
          Registration_Details: string | null
          Report_Publication_Date: string | null
          Responsive: boolean | null
          Safe: boolean | null
          Service_Specialism: string | null
          Service_Types: string | null
          Short_Code: string | null
          Specialisms_services: string | null
          Specialisms_Services: string | null
          Surgical_Procedures: string | null
          Town_City: string | null
          Treatment: string | null
          URL: string | null
          Website: string | null
          Welled: boolean | null
          Who_Runs_This: string | null
        }
        Insert: {
          Address_1?: string | null
          Address_2?: string | null
          Also_Known_As?: string | null
          Caring?: boolean | null
          County?: string | null
          "CQC_Location ID (for office use only)"?: string | null
          CQC_Provider_Office_Use_Only?: string | null
          Current_ServiceView?: string | null
          Dentist_Type?: string | null
          Diagnostic_Procedures?: string | null
          Effective?: boolean | null
          fakelat?: number | null
          fakelong?: number | null
          id?: number
          Latitude?: number | null
          Local_Authority?: string | null
          Longitude?: number | null
          Name?: string | null
          Paragraphs_Assessment?: string | null
          Paragraphs_Routine?: string | null
          People_Experience?: string | null
          Phone_Number?: number | null
          Postcode?: string | null
          Provider_Name?: string | null
          Region?: string | null
          Registration_Details?: string | null
          Report_Publication_Date?: string | null
          Responsive?: boolean | null
          Safe?: boolean | null
          Service_Specialism?: string | null
          Service_Types?: string | null
          Short_Code?: string | null
          Specialisms_services?: string | null
          Specialisms_Services?: string | null
          Surgical_Procedures?: string | null
          Town_City?: string | null
          Treatment?: string | null
          URL?: string | null
          Website?: string | null
          Welled?: boolean | null
          Who_Runs_This?: string | null
        }
        Update: {
          Address_1?: string | null
          Address_2?: string | null
          Also_Known_As?: string | null
          Caring?: boolean | null
          County?: string | null
          "CQC_Location ID (for office use only)"?: string | null
          CQC_Provider_Office_Use_Only?: string | null
          Current_ServiceView?: string | null
          Dentist_Type?: string | null
          Diagnostic_Procedures?: string | null
          Effective?: boolean | null
          fakelat?: number | null
          fakelong?: number | null
          id?: number
          Latitude?: number | null
          Local_Authority?: string | null
          Longitude?: number | null
          Name?: string | null
          Paragraphs_Assessment?: string | null
          Paragraphs_Routine?: string | null
          People_Experience?: string | null
          Phone_Number?: number | null
          Postcode?: string | null
          Provider_Name?: string | null
          Region?: string | null
          Registration_Details?: string | null
          Report_Publication_Date?: string | null
          Responsive?: boolean | null
          Safe?: boolean | null
          Service_Specialism?: string | null
          Service_Types?: string | null
          Short_Code?: string | null
          Specialisms_services?: string | null
          Specialisms_Services?: string | null
          Surgical_Procedures?: string | null
          Town_City?: string | null
          Treatment?: string | null
          URL?: string | null
          Website?: string | null
          Welled?: boolean | null
          Who_Runs_This?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string | null
          allergies: string | null
          created_at: string
          date_of_birth: string | null
          dental_history: string | null
          email: string | null
          full_name: string | null
          id: string
          medical_history: string | null
          medications: string | null
          nhs_number: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          allergies?: string | null
          created_at?: string
          date_of_birth?: string | null
          dental_history?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          medical_history?: string | null
          medications?: string | null
          nhs_number?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          allergies?: string | null
          created_at?: string
          date_of_birth?: string | null
          dental_history?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          medical_history?: string | null
          medications?: string | null
          nhs_number?: string | null
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      ratings: {
        Row: {
          comment: string | null
          created_at: string
          dentist_id: string | null
          id: string
          practice_id: string | null
          rating: number
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          dentist_id?: string | null
          id?: string
          practice_id?: string | null
          rating: number
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          dentist_id?: string | null
          id?: string
          practice_id?: string | null
          rating?: number
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      supplier_orders: {
        Row: {
          created_at: string
          dentist_name: string
          id: string
          items: Json
          order_type: string
          practice_address: string
          practice_id: string
          practice_name: string
          status: string
          supplier_id: string | null
          total: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          dentist_name: string
          id?: string
          items: Json
          order_type: string
          practice_address: string
          practice_id: string
          practice_name: string
          status?: string
          supplier_id?: string | null
          total: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          dentist_name?: string
          id?: string
          items?: Json
          order_type?: string
          practice_address?: string
          practice_id?: string
          practice_name?: string
          status?: string
          supplier_id?: string | null
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "supplier_orders_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "supplier_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      supplier_products: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          manufacturer: string | null
          min_stock: number | null
          name: string
          price: number
          sku: string | null
          specifications: string | null
          stock: number | null
          supplier_id: string | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          manufacturer?: string | null
          min_stock?: number | null
          name: string
          price: number
          sku?: string | null
          specifications?: string | null
          stock?: number | null
          supplier_id?: string | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          manufacturer?: string | null
          min_stock?: number | null
          name?: string
          price?: number
          sku?: string | null
          specifications?: string | null
          stock?: number | null
          supplier_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "supplier_products_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "supplier_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      supplier_profiles: {
        Row: {
          address: string | null
          business_name: string | null
          business_type: string | null
          created_at: string
          description: string | null
          id: string
          logo_url: string | null
          phone: string | null
          registration_number: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          address?: string | null
          business_name?: string | null
          business_type?: string | null
          created_at?: string
          description?: string | null
          id: string
          logo_url?: string | null
          phone?: string | null
          registration_number?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          address?: string | null
          business_name?: string | null
          business_type?: string | null
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          phone?: string | null
          registration_number?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
