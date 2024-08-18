import { User } from "../../entity/user";

export interface UserInfo {
  name?: string;
  email?: string;
  password?: string;
}

export async function createUser(data: UserInfo) {
  let user = User.create({
    ...data,
  });

  return User.save(user);
}

export async function getUserByEmail(email: string) {
  return await User.findOne({ email });
}

export async function getUserById(_id: any) {
  return await User.findOne({ _id });
}

export async function getAllUser() {
  return await User.find();
}

export async function updateUser(_id: string, updatedData) {
  try {
    return await User.update(_id, { ...updatedData });
  } catch (err) {
    return err;
  }
}

export const deleteUserById = async (_id: number | string) => {
  try {
    return await User.delete(_id);
  } catch (err) {
    return err;
  }
};
