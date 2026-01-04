export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string | null
          role: 'user' | 'partner' | 'admin'
          department: string | null
          doctor_code: string | null
          is_active: boolean
          last_login: string | null
          created_at: string
        }
        Insert: {
          id: string
          email: string
          role?: 'user' | 'partner' | 'admin'
          // ... (생략된 필드는 선택적 입력 가능)
        }
        Update: {
          // ... (업데이트 가능 필드)
        }
      }
      safety_gate_logs: {
        Row: {
          id: string
          user_id: string | null
          blocked_ingredient: string
          reason: string
          applied_rule_id: string | null
          timestamp: string
        }
        Insert: {
          user_id?: string | null
          blocked_ingredient: string
          reason: string
          applied_rule_id?: string | null
        }
      }
      security_logs: {
        Row: {
          id: string
          user_id: string | null
          action_type: string
          resource_target: string | null
          ip_address: string | null
          details: Json | null
          severity: string
          created_at: string
        }
        Insert: {
          user_id?: string | null
          action_type: string
          resource_target?: string | null
          ip_address?: string | null
          details?: Json | null
          severity?: string
        }
      }
      // ... surveys, user_health_data 등 추가 정의
    }
  }
}