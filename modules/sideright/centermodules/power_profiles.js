const powerProfiles = await Service.import('powerprofiles')

const label = Widget.Label({
    label: powerProfiles.bind('active_profile'),
})

const button = Widget.Button({
    on_clicked: () => {
        switch (powerProfiles.active_profile) {
            case 'power-saver':
                powerProfiles.active_profile = 'performance';
                break;
            default:
                powerProfiles.active_profile = 'power-saver';
                break;
        };
    },
})
