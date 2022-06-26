export enum TemplateType{
  Home = 1,
  Page = 2
}

export class TemplateDefaultConfig {
  public template: TemplateType = TemplateType.Home;
  public title: string = null;
  public isClose: boolean = false;
  public isBack: boolean = false;
  public isHeader: boolean = true;
  public isExit: boolean = false;
  public actionRoute: string = null;
}

export class TemplateProfileConfig {  
  public title: string = null;
  public isClose: boolean = false;
  public isBack: boolean = false;
  public actionRoute: string = null;
}
