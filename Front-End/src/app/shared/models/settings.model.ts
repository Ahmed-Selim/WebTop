
export interface Settings {
    animation: boolean;
    sound: boolean;
    soundTrack: string;
    wallpaper: string;  /// url | gradiant | color
    fontFamily: string;
    color: string;
    fullScreen: boolean;
    language: string;
    direction: boolean; /// rtl = 0 | ltr = 1
    /**
     *    when direction === false
     *
     *  .flex-row-reverse @for cloud-app > main
     *  {right: 48px; left: 0px} @for cloud-app > app-window
     *  {right: 0; left: auto} @for aside > div.p-col-fixed.hover::before
     *  {right: 48px; left: 0px} @for cloud-app > #appstore
     */
    styleTheme: string;

    appStore: {
      direction: string,
      background: string,
      fontFamily: string,
      color: string,  /// remove .text-white
      /* for div.api */
      backgroundColor: string
      width: string /// .col2 : .col11
    };

    sideBar: {
      height: number,  /// for task
      width: number,   /// for aside
      color: string,   /// remove .text-white
      background: string,
      taskbg: string, /// background for task
    };
}
