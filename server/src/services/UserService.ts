import { UserAttributes, UserCreationAttributes } from "@types";
import { UserModel } from "@orm";

export async function GetUser(
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<UserAttributes | null> {
  try {
    const { id } = args;

    if (id) throw new Error();
    const findUser = await UserModel.findByPk(id);

    if (!findUser) throw new Error();

    return findUser.get();
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function GetUsers(
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<UserAttributes[] | null> {
  try {
    const { ids } = args;

    if (ids?.length <= 0) throw new Error();

    const findUsers = await UserModel.findAll();

    const data = findUsers.map((user) => user.get());

    if (!data.length) throw new Error();

    return data;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function PutUser(
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<UserAttributes | null> {
  try {
    const { user } = args;
    // Encypt password if password is changed
    // user.password = Hash(user.password);

    const findUser = await UserModel.upsert(user);

    // NOTE: See sequelize upsert function returns
    if (!findUser.length) throw new Error();
    return findUser[0].get();
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function DeleteUser(
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<UserCreationAttributes | null> {
  try {
    const { id } = args;
    const findUser = await UserModel.findByPk(id);

    if (!findUser) throw new Error();

    await findUser.destroy();
    return {
      id,
    };
  } catch (err) {
    console.error(err);
  }
  return null;
}
