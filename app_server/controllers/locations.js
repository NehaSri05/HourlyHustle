module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'HourlyHustle - find a place to work',
        pageHeader: {
            title: 'HourlyHustle',
            strapline: 'Find places to work'
        },
        sidebar: "Looking for a part-time job? HourlyHustle helps you find places to work ",
        locations: [{
            name: 'DMart',
            address: ' Medipally Hyderabad, on Main Road,  beside Aruna Studios, Srinvas Nagar Colony',
            rating: 3,
            facilities: [ 'Customizable Shifts', 'Paid TimeOff','DMart Employee Discounts'],
            distance: '100m'
        }, {
            name: 'Tutoring',
            address: 'SV neeladri, Swarnagiri Colony',
            rating: 4,
            facilities: ['Skill Development', 'Resource Library','Remote Tutoring'],
            distance: '200m'
        }, {
            name: 'Hotels',
            address: 'Vijayapuri Colony, Narapally, Pocharam',
            rating: 2,
            facilities: ['Customizable Shifts', 'Free or Discounted Meals','Paid Time Off'],
            distance: '250m'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};