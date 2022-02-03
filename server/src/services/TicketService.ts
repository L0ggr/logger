import { Ticket } from "@types";
import { TicketModel } from "@orm";

export async function GetTicket(
  parent: any,
  args: { id: string },
  context: any,
  info: any
): Promise<Ticket | null> {
  try {
    const { id } = args;

    if (!id) throw new Error();
    const findTicket = await TicketModel.findById(id);

    if (!findTicket) throw new Error();

    return findTicket;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function UpdateTicket(
  parent: any,
  args: { id: string; ticket: Ticket },
  context: any,
  info: any
): Promise<Ticket | null> {
  try {
    const { id, ticket } = args;

    const updatedTicket = await TicketModel.findByIdAndUpdate(id, ticket);

    if (!updatedTicket) throw new Error();

    return updatedTicket;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function AddTicket(
  parent: any,
  args: { ticket: Ticket },
  context: any,
  info: any
): Promise<Ticket | null> {
  try {
    const { ticket } = args;

    const createdTicket = await TicketModel.create(ticket);

    return createdTicket;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function DeleteTicket(
  parent: any,
  args: { id: string },
  context: any,
  info: any
): Promise<{ id: string } | null> {
  try {
    const { id } = args;
    const result = await TicketModel.findByIdAndDelete(id);

    if (!result?.$isDeleted) throw new Error();

    return { id };
  } catch (err) {
    console.error(err);
  }
  return null;
}
