import { defineAppConfig } from '../types';

export default defineAppConfig({{
  id: 'com.netease.cbg',
  name: '藏宝阁',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.netease.cbg.activities.LoadingActivity'],
      rules: [
        {
          matches: '[text="跳过（3）"]',
          snapshotUrls: 'https://i.gkd.li/import/13774582',//获取链接的方法在上一步有说明
        },
        {
          matches: '[id="com.netease.cbg:id/tv_cbg_launch_skip"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13774582'
          ],
        },
      ],
    },
  ],
});
