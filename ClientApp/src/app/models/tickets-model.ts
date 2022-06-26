import { TicketStatus, TicketStatusLabel } from "./global-model";

export class TicketsModel {
 
  subject!: string;
  description!: string;
  reply!: string;
  insertDate!: string;
  status!: TicketStatus;

}

export class InsertTicketsModel{
  subject!: string;
  description!: string;
}
export class ReplyTicketModel {
  ticketId?: number;
  replyText?: string;
}


export class getTicketsModel {
  Filters?: string;
  Sorts?: string;
  Page?: number;
  PageSize?: number;
  status?: string;
}


