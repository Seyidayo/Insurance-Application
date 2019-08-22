const state = {
  applications: {
    fetching: false,
    list: [
      {
        insuranceType: "Motor Insurance",
        complete: true,
        _id: "5d4c4dab70c607065e1aqa1d",
        createdDate: "2019-08-08T16:28:27.446Z",
        __v: 0,
        amount: 5000
      },
      {
        insuranceType: "Travel Insurance",
        complete: false,
        _id: "5d4c4dab70c607065e1apa1d",
        createdDate: "2019-08-08T16:28:27.446Z",
        __v: 0,
        amount: 5000
      },
      {
        insuranceType: "Life Insurance",
        complete: true,
        _id: "5d4c4dab70c607065e1ada1d",
        createdDate: "2019-08-08T16:28:27.446Z",
        __v: 0,
        amount: 5000
      },
      {
        insuranceType: "Health Insurance",
        complete: false,
        _id: "5d4c4dab70c607065e1asa1d",
        createdDate: "2019-08-08T16:28:27.446Z",
        __v: 0,
        amount: 5000
      }
    ]
  },
  statistics: {
    fetching: false,
    list: []
  }
};

export default state;
