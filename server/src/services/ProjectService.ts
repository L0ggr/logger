import { Project } from "@types";
import { ProjectModel } from "@orm";


export async function GetProject(
  parent: any,
  args: { id: string },
  context: any,
  info: any
): Promise<Project | null> 
{
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

//this does not work :((
/* 
export async function AddProject(
    parent: any,
    args: { id: string },
    context: any,
    info: any) : Promise<Project | null> {
    try {
    const {id} = args;

    id.createdAt = new Date();
    id.updatedAt = new Date();
    const createdProject = await ProjectModel.create(project);
    return createdProject;
    } catch (err) {
    console.error(err);
    }
    return null;
}
*/

