

export const navigation =
    [
        // {
        //     id: 'applications',
        //     title: 'Applications',
        //     translate: 'NAV.APPLICATIONS',
        //     type: 'group',
        //     children: [
        {
            id: '11',
            title: 'Dashboard',
            type: 'item',
            //icon: 'dashboard',
            icon: 'palette',
            url: '/dashboard'
        },
        {
            id: '18',
            title: 'Dashboard (AI)',
            type: 'item',
            //icon: 'dashboard',
            icon: 'palette',
            url: '/AIDashboard'
        },
        {
            id: '17',
            title: 'Insights and Segments',
            type: 'collapsable',
            icon: 'bar_chart',
            children: [
                {
                    id: '159',
                    title: 'View Segment',
                    type: 'item',
                    //icon: 'sms',
                    //icon: 'view_compact',
                    url: '/viewSegments'
                },
                {
                    id: '160',
                    title: 'Configure Segment',
                    type: 'item',
                    //icon: 'keyboard_voice',
                    //icon: 'edit',
                    url: '/configure'
                }
            ]
        },
        {
            id: 'channels',
            title: 'Channels',
            type: 'item',
            //icon: 'view_quilt',
            icon: 'ondemand_video',
            url: '/channels'
        },
        {
            id: '6',
            title: 'Campaign Builder',
            type: 'collapsable',
            icon: 'widgets',
            children: [
                {
                    id: '124',
                    title: 'SMS',
                    type: 'item',
                    //icon: 'sms',
                    url: '/campaignBuilder'
                },
                {
                    id: '125',
                    title: 'Voice',
                    type: 'item',
                    //icon: 'keyboard_voice',
                    url: '/obdCampaignBuilder'
                },
                {
                    id: '126',
                    title: 'Email',
                    type: 'item',
                    //icon: 'email',
                    url: '/newEmailCampaignBuilder'
                },
                {
                    id: '146',
                    title: 'Whatsapp',
                    type: 'item',
                    url: '/whatsappCampaignBuilder'
                }
                // ,
                // {
                //     id: '126',
                //     title: 'Email',
                //     type: 'item',
                //     icon: 'view_quilt',
                //     url: '/emailCampaignBuilder'
                // }
            ]
        },
        // {
        //     id: 'compaignbuilder',
        //     title: 'Campaign Builder',
        //     type: 'item',
        //     icon: 'view_quilt',
        //     url: '/compaignBuilder'
        // },
        {
            id: '1',
            title: 'SMS',
            type: 'collapsable',
            icon: 'sms',
            children: [
                {
                    id: '102',
                    title: 'View Campaign',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/viewCampaignList'
                },
                {
                    id: '101',
                    title: 'Template',
                    type: 'item',
                    //icon: 'photo_album',
                    url: '/templates'
                },
                {
                    id: '139',
                    title: 'Aggregator',
                    type: 'item',
                    //icon: 'reorder',
                    // icon: 'layers',
                    url: '/aggregators'
                },
                {
                    id: '106',
                    title: 'DND Scrubbing',
                    type: 'item',
                    //icon: 'store',
                    url: '/dndScrubbing'
                },
                {
                    id: '104',
                    title: 'Sender ID',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/senderId'
                },
                {
                    id: '108',
                    title: 'Manage MO',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/managemo'
                },
                {
                    id: '103',
                    title: 'Address Book',
                    type: 'item',
                    //icon: 'contact_phone',
                    url: '/addressBook'
                }
            ]
        },
        {
            id: '2',
            title: 'Email',
            type: 'collapsable',
            icon: 'email',
            children: [
                {
                    id: '111',
                    title: 'View Campaign',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/emailViewCampaign'
                },
                {
                    id: '110',
                    title: 'Template',
                    type: 'item',
                    //icon: 'photo_album',
                    url: '/email-template'
                },
                {
                    id: '114',
                    title: 'Sender ID',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/email-senderID'
                },
                {
                    id: '113',
                    title: 'Address Book',
                    type: 'item',
                    //icon: 'contact_phone',
                    url: '/emailAddressBook'
                },
                {
                    id: '112',
                    title: 'Unsubscribe Groups',
                    type: 'item',
                    //icon: 'group_work',
                    url: '/unsubscribe-groups'
                }
                // ,
                // {
                //     id: '112',
                //     title: 'Advanced Unsubscribe Groups',
                //     type: 'item',
                //     icon: 'group_work',
                //     url: '/adv-unsubscribe-groups'
                // }
            ]
        },
        {
            id: '3',
            title: 'Voice',
            type: 'collapsable',
            icon: 'keyboard_voice',
            children: [
                // {
                //     id: 'obdcampaignbuilder',
                //     title: 'Campaign Builder',
                //     type: 'item',
                //     icon: 'view_quilt',
                //     url: '/obdCampaignBuilder'
                // },
                {
                    id: '117',
                    title: 'View Campaigns',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/obdViewCampaignList'
                },
                {
                    id: 'viewIvr',
                    title: 'View Ivr Flow',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/view-ivrFlow'
                },

                {
                    id: 'voiceStudio',
                    title: 'Voice Studio',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/voiceStudio'
                },
                {
                    id: '147',
                    title: 'Miss Call Alerts',
                    type: 'item',
                    //icon: 'keyboard_voice',
                    url: '/viewMissCall'
                },
                {
                    id: '150',
                    title: 'Toll Free Number',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/tollFreeNumber'
                },
                {
                    id: '148',
                    title: 'Service Configuration',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/servicesForCC'
                },
                {
                    id: '157',
                    title: 'Click To Call Configuration',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/viewCallConfig'
                },
                {
                    id: '158',
                    title: 'Click To Call Widget',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/viewCall'
                }
            ]
        },
        {
            id: '13',
            title: 'WhatsApp',
            type: 'collapsable',
            icon: 'sms',
            children: [
                {
                    id: 'viewProfilesSA',
                    title: 'WhatsApp Profile(s)',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/viewConfigureWhatsApp'
                },
                {
                    id: 'singleProfile',
                    title: 'WhatsApp Profile',
                    type: 'item',
                    //icon: 'photo_album',
                    url: '/configureWhatsApp'
                },
                {
                    id: '145',
                    title: 'Configure WhatsApp Profile',
                    type: 'item',
                    //icon: 'photo_album',
                    url: '/createConfigureWhatsApp'
                },
                {
                    id: '146',
                    title: 'Template',
                    type: 'item',
                    //icon: 'photo_album',
                    url: '/whatsAppTemplate'
                },
                {
                    id: '146',
                    title: 'View Campaigns',
                    type: 'item',
                    url: '/viewWhatsappCampaign'
                },
                {
                    id: '103',
                    title: 'Address Book',
                    type: 'item',
                    //icon: 'contact_phone',
                    url: '/addressBook'
                }
            ]
        },
        // {
        //     id: 'wa',
        //     title: 'WhatsApp',
        //     type: 'collapsable',
        //     icon: 'sms',
        //     children: [

        //         {
        //             id: 'viewAll',
        //             title: 'View Configuration',
        //             type: 'item',
        //             //icon: 'view_quilt',
        //             url: '/viewConfigureWhatsApp'
        //         },

        //         {
        //             id: 'view',
        //             title: 'View Configuration',
        //             type: 'item',
        //             //icon: 'photo_album',
        //             url: '/configureWhatsApp'
        //         },

        //         {
        //             id: 'create',
        //             title: 'Configuration Settings',
        //             type: 'item',
        //             //icon: 'photo_album',
        //             url: '/createConfigureWhatsApp'
        //         },
        //     ]
        // },
        {
            id: '19',
            title: 'Email to SMS',
            type: 'collapsable',
            icon: 'inbox',
            children: [
                {
                    id: '155',
                    title: 'View Email to SMS',
                    type: 'item',
                    url: '/viewEtoS'
                }
            ]
        },
         {
            id: '19',
            title: 'In App Notification',
            type: 'collapsable',
            icon: 'class',
            children: [
                {
                    id: '155',
                    title: 'View Notification',
                    type: 'item',
                    url: '/pushNotifincation'
                },
                {
                    id: '155',
                    title: 'Notification Configuration',
                    type: 'item',
                    url: '/notification-config'
                },
            ]
        },
        {
            id: '12',
            title: 'Spam Keyword',
            type: 'item',
            //icon: 'notifications_active',
            icon: 'message',
            url: '/spamKeyword'
        },
        {
            id: '5',
            title: 'Credit Management',
            type: 'item',
            //icon: 'money',
            icon: 'credit_card',
            // credit_card
            url: '/creditManagement'
        },
        {
            id: '4',
            title: 'Manage TPS',
            type: 'item',
            //icon: 'view_quilt',
            icon: 'network_check',
            url: '/tpsManagement'
        },
        {
            id: '7',
            title: 'Manage Users',
            type: 'collapsable',
            icon: 'person',
            children: [
                {
                    id: '127',
                    title: 'View/Create Users',
                    type: 'item',
                    //icon: 'view_quilt',
                    url: '/userManagement'
                }
            ]
        },
        {
            id: '8',
            title: 'Manage Roles',
            type: 'item',
            icon: 'notifications_active',
            url: '/manageRoles'
        },
        {
            id: '10',
            title: 'Reporting',
            type: 'collapsable',
            icon: 'horizontal_split',
            children: [
                {
                    id: 'viewReports',
                    title: 'View Reports',
                    type: 'item',
                    icon: 'horizontal_split',
                    url: '/reports'
                },
                {
                    id: 'downloadReports',
                    title: 'Downloads',
                    type: 'item',
                    icon: 'get_app',
                    url: '/report-downloads'
                }
            ]
        },
        // {
        //     id: '10',
        //     title: 'Reporting',
        //     type: 'item',
        //     icon: 'horizontal_split',
        //     url: '/reports'
        // },
        {
            id: 'calendar',
            title: 'Calendar',
            type: 'item',
            icon: 'notifications_active',
            url: '/calendar'
        },
        {
            id: '2FA',
            title: 'Two Factor Authentication',
            type: 'item',
            icon: 'notifications_active',
            url: '/configuration'
        },
        {
            id: '9',
            title: 'Manage Profile',
            type: 'collapsable',
            icon: 'person_pin',
            children: [
                {
                    id: '133',
                    title: 'My Profile',
                    type: 'item',
                    //icon: 'person',
                    url: '/profile'
                },
                {
                    id: '136',
                    title: 'Change Password',
                    type: 'item',
                    //icon: 'vpn_key',
                    url: '/change-password'
                }
                /* ,{
                    id   : 'mail',
                    title: 'Notification',
                    type : 'item',
                    icon : 'notifications_active',
                    url  : '/notification'
                } */
            ]
        },
        {
            id: 'support',
            title: 'Support',
            type: 'collapsable',
            icon: 'contact_support',
            children: [
                {
                    id: 'ticket',
                    title: 'Create Ticket',
                    type: 'item',
                    // icon: 'receipt',
                    url: '/createTicket'
                },
                {
                    id: 'faq',
                    title: 'FAQ',
                    type: 'item',
                    //icon: 'help_outline',
                    url: '/faq'
                }
            ]
        }
        // ,
        // {
        //     id: 'ticket',
        //     title: 'Support',
        //     type: 'item',
        //     icon: 'notifications_active',
        //     url: '/createTicket'
        // }
    ];