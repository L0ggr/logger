import { Project } from "@types";
import { ProjectModel } from "@orm";

export async function GetProject(
  parent: any,
  args: { id: string },
  context: any,
  info: any
): Promise<Project | null> {
  try {
    const { id } = args;

    if (!id) throw new Error();
    const findProject = await ProjectModel.findById(id);

    if (!findProject) throw new Error();

    return findProject;
  } catch (err) {
    console.error(err);
  }
  return null;
}

// export async function UpdateUser(
//   parent: any,
//   args: { id: string; user: User },
//   context: any,
//   info: any
// ): Promise<User | null> {
//   try {
//     const { id, user } = args;
//     // TODO(Ecy): Encypt password
//     // user.password = Hash(user.password);

//     user.updatedAt = new Date();
//     const updateUser = await UserModel.findByIdAndUpdate(id, user);

//     if (!updateUser) throw new Error();

//     return updateUser;
//   } catch (err) {
//     console.error(err);
//   }
//   return null;
// }

export async function AddProject(
  parent: any,
  args: { project: Project },
  context: any,
  info: any
): Promise<Project | null> {
  try {
    const { project } = args;
    // TODO(Ecy): Encypt password
    // user.password = Hash(user.password);

    // user.createdAt = new Date();
    // user.updatedAt = new Date();
    const createdProject = await ProjectModel.create(project);

    return createdProject;
  } catch (err) {
    console.error(err);
  }
  return null;
}

// // Note(Ecy): Return type is janky :) someone fix please
// export async function DeleteUser(
//   parent: any,
//   args: { id: string },
//   context: any,
//   info: any
// ): Promise<{ id: string } | null> {
//   try {
//     const { id } = args;
//     const result = await UserModel.findByIdAndDelete(id);

//     if (!result?.$isDeleted) throw new Error();

//     return { id };
//   } catch (err) {
//     console.error(err);
//   }
//   return null;
// }
