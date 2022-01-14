import { User } from "@types";
import { UserModel } from "@orm";

export async function GetUser(
  parent: any,
  args: { id: string },
  context: any,
  info: any
): Promise<User | null> {
  try {
    const { id } = args;

    if (!id) throw new Error();
    const findUser = await UserModel.findById(id);

    if (!findUser) throw new Error();

    return findUser;
  } catch (err) {
    console.error(err);
  }
  return null;
}

// export async function GetUsers(
//   parent: any,
//   args: any,
//   context: any,
//   info: any
// ): Promise<UserAttributes[] | null> {
//   try {
//     const { ids } = args;

//     if (ids?.length <= 0) throw new Error();

//     const findUsers = await UserModel.findAll();

//     const data = findUsers.map((user) => user.get());

//     if (!data.length) throw new Error();

//     return data;
//   } catch (err) {
//     console.error(err);
//   }
//   return null;
// }

export async function UpdateUser(
  parent: any,
  args: { id: string; user: User },
  context: any,
  info: any
): Promise<User | null> {
  try {
    const { id, user } = args;
    // TODO(Ecy): Encypt password
    // user.password = Hash(user.password);

    user.updatedAt = new Date();
    const updateUser = await UserModel.findByIdAndUpdate(id, user);

    if (!updateUser) throw new Error();

    return updateUser;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function AddUser(
  parent: any,
  args: { user: User },
  context: any,
  info: any
): Promise<User | null> {
  try {
    const { user } = args;
    // TODO(Ecy): Encypt password
    // user.password = Hash(user.password);

    user.createdAt = new Date();
    user.updatedAt = new Date();
    const findUser = new UserModel(user);

    await findUser.save();
    return findUser;
  } catch (err) {
    console.error(err);
  }
  return null;
}

// Note(Ecy): Return type is janky :) someone fix please
export async function DeleteUser(
  parent: any,
  args: { id: string },
  context: any,
  info: any
): Promise<{ id: string } | null> {
  try {
    const { id } = args;
    const result = await UserModel.findByIdAndDelete(id);

    if (!result?.$isDeleted) throw new Error();

    return { id };
  } catch (err) {
    console.error(err);
  }
  return null;
}
