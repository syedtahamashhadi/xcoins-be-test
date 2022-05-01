import mongoose from "mongoose";
import _ from "lodash";
import { ProfileSchema } from '../profile/schemas/profile.schema'
import { SimulatorSchema } from "../simulator/schemas/simulator.schema";
import { FavouriteSchema } from "../favourite/schemas/favourite.schema";

(async () => {
  mongoose.connect("mongodb+srv://taha:cQIpWJgNedBncJNe@cluster0.dmtfs.mongodb.net/xcoins?retryWrites=true&w=majority")

  const Profile = mongoose.model("Profile", ProfileSchema);
  const profile = new Profile({
    name: `String`,
    email: `String`,
    capital: `123`,
    divisa: `String`,
    prefered_cryptocurrency: `String`,
  });
  let savedProfile = await profile.save();

  const Simulator = mongoose.model("Simulator",SimulatorSchema)
  const simulator = new Simulator({
    profile_id: savedProfile._id ,
    dateRecorded: new Date,
    cryptocurrency: `String`,
    euros:2.5,
    price:0.86,
    quantity:2000000000,
  });
  await simulator.save();

  const Favorite = mongoose.model("Favourite",FavouriteSchema)
  const favorite = new Favorite({
    profile_id: savedProfile._id,
    name: `String`,
    favourite1: `String`,
    favourite2: `String`,
    favourite3: `String`,
  });
  await favorite.save();

  mongoose.disconnect();
})();
