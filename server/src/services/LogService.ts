import { Log } from "@types";
import { LogModel } from "@orm";

export async function GetTicket(
  parent: any,
  args: { id: string },
  context: any,
  info: any
): Promise<Log | null> {
  try {
    const { id } = args;

    if (!id) throw new Error();
    const findLog = await LogModel.findById(id);

    if (!findLog) throw new Error();

    return findLog;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function UpdateLog(
  parent: any,
  args: { id: string; log: Log },
  context: any,
  info: any
): Promise<Log | null> {
  try {
    const { id, log } = args;

    const updatedLog = await LogModel.findByIdAndUpdate(id, log);

    if (!updatedLog) throw new Error();

    return updatedLog;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function AddLog(
  parent: any,
  args: { log: Log },
  context: any,
  info: any
): Promise<Log | null> {
  try {
    const { log } = args;

    const createdLog = await LogModel.create(log);

    return createdLog;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function DeleteLog(
  parent: any,
  args: { id: string },
  context: any,
  info: any
): Promise<{ id: string } | null> {
  try {
    const { id } = args;
    const result = await LogModel.findByIdAndDelete(id);

    if (!result?.$isDeleted) throw new Error();

    return { id };
  } catch (err) {
    console.error(err);
  }
  return null;
}
