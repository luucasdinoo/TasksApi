import { Category } from "../../../categories/typeorm/entities/Category";
import { User } from "../../../users/typeorm/entities/User";

export default class TaskDTO {
    id?: number;
  
    title: string;
  
    description: string;
  
    dueDate: Date;
  
    status?: string; // Opcional porque pode assumir um valor padrão ('pending') na entidade
  
    user_id?: User; // Referência ao ID do usuário (substituindo o objeto `User` para simplificar)
  
    categoryId?: Category; // Referência ao ID da categoria (substituindo o objeto `Category`)
  

  }
  