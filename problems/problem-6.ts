interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
  if (updates.name) profile.name = updates.name;
  if (updates.age) profile.age = updates.age;
  if (updates.email) profile.email = updates.email;

  return profile;
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
