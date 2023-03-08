import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  // const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const { missions } = useSelector((state) => state.missions);
  return (
    <main className="grid md:grid-cols-2 gap-8 py-10 px-4 md:px-16">
      <article>
        <h2 className="text-[2rem] font-semibold mb-2 ">My Mission</h2>
        <section className="border border-[#121212]">
          {missions
            .filter((mission) => mission.reserved === true)
            .map((mission) => (
              <h4 className="p-3 border-b border-[#121212]" key={mission.mission_id}>
                {mission.mission_name}
              </h4>
            ))}
        </section>
      </article>
      <article>
        <h2 className="text-[2rem] font-semibold mb-2 ">My Rockets</h2>
        <section className="border border-[#121212]">
          {rockets
            .filter((rocket) => rocket.reserved === true)
            .map((rocket) => (
              <h4 className="p-3 border-b border-[#121212]" key={rocket.id}>
                {rocket.name}
              </h4>
            ))}
        </section>
      </article>
    </main>
  );
};

export default MyProfile;
