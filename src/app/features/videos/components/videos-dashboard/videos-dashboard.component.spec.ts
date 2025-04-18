import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { VideosDashboardComponent } from './videos-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VideosDashboardComponent', () => {
  let component: VideosDashboardComponent;
  let fixture: ComponentFixture<VideosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, VideosDashboardComponent],
      providers: [provideHttpClient(withFetch())],
    }).compileComponents();

    fixture = TestBed.createComponent(VideosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
