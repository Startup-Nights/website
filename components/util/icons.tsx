import { BuildingOffice2Icon, BuildingStorefrontIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon, Cog6ToothIcon, FunnelIcon, HeartIcon, InformationCircleIcon, LightBulbIcon, MegaphoneIcon, PhoneIcon, PresentationChartLineIcon, RocketLaunchIcon, StarIcon, TicketIcon, TrophyIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const getIcon = (icon: string, classes: string) => {
  switch (icon) {
    case 'chatbubble': return <ChatBubbleLeftRightIcon className={classes} />
    case 'lightbulb': return <LightBulbIcon className={classes} />
    case 'heart': return <HeartIcon className={classes} />
    case 'usergroup': return <UserGroupIcon className={classes} />
    case 'checkbadge': return <CheckBadgeIcon className={classes} />
    case 'cog': return <Cog6ToothIcon className={classes} />
    case 'megaphone': return <MegaphoneIcon className={classes} />
    case 'funnel': return <FunnelIcon className={classes} />
    case 'rocket': return <RocketLaunchIcon className={classes} />
    case 'calendar': return <CalendarDaysIcon className={classes} />
    case 'booth': return <BuildingStorefrontIcon className={classes} />
    case 'pitch': return <PresentationChartLineIcon className={classes} />
    case 'office': return <BuildingOffice2Icon className={classes} />
    case 'star': return <StarIcon className={classes} />
    case 'phone': return <PhoneIcon className={classes} />
    case 'trophy': return <TrophyIcon className={classes} />
    case 'ticket': return <TicketIcon className={classes} />
    case 'login': return <UserCircleIcon className={classes} />
    case 'info': return <InformationCircleIcon className={classes} />
  }
}

