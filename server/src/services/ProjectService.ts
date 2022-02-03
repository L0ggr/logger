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

export async function UpdateProject(
  parent: any,
  args: { id: string; project: Project },
  context: any,
  info: any
): Promise<Project | null> {
  try {
    const { id, project } = args;

    const updatedProject = await ProjectModel.findByIdAndUpdate(id, project);

    if (!updatedProject) throw new Error();

    return updatedProject;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function AddProject(
  parent: any,
  args: { project: Project },
  context: any,
  info: any
): Promise<Project | null> {
  try {
    const { project } = args;

    const createdProject = await ProjectModel.create(project);

    return createdProject;
  } catch (err) {
    console.error(err);
  }
  return null;
}

export async function DeleteProject(
  parent: any,
  args: { id: string },
  context: any,
  info: any
): Promise<{ id: string } | null> {
  try {
    const { id } = args;
    const result = await ProjectModel.findByIdAndDelete(id);

    if (!result?.$isDeleted) throw new Error();

    return { id };
  } catch (err) {
    console.error(err);
  }
  return null;
}
