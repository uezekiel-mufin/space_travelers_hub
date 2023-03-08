const Mission = (mission) => {
  const {
    missionName,
    description,
  } = mission;
  return (
    <tr>
      <td className="border px-4 py-2">{missionName}</td>
      <td className="border px-4 py-2">{description}</td>
      <td className="border px-4 py-2">
        <button
          type="button"
        >
          NOT A MEMBER
        </button>
      </td>
      <td className="border px-4 py-2">
        <button
          type="button"
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};

export default Mission;
