import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosDashboardComponent } from './videos-dashboard.component';
import { HttpClient } from '@angular/common/http';

describe('VideosDashboardComponent', () => {
  let component: VideosDashboardComponent;
  let fixture: ComponentFixture<VideosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosDashboardComponent],
      providers: [HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(VideosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
