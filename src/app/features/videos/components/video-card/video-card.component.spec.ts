import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardComponent } from './video-card.component';
import { Video } from '../../../../shared/models/video.model';

describe('VideoCardComponent', () => {
  let component: VideoCardComponent;
  let fixture: ComponentFixture<VideoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoCardComponent);
    component = fixture.componentInstance;

    // Mock the video property
    Object.defineProperty(component, 'video', {
      value: new Video({
        id: 'wqweq',
        title:
          'One Two Three | Learn Number | With Slide | Youtube Kids | NuNu Tv Nursery Rhymes  #kindergartensong',
        description:
          'Subscribe For New Kids Songs Every Week ▻▻ https://www.youtube.com/c/NuNuTVNurseryRhymes?sub_confirmation=1 ...',
        thumbnail: {
          url: 'https://i.ytimg.com/vi/amTmnnqQf_E/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        visibility: 'Public',
        author: 'NuNu Tv - Nursery Rhymes',
        uploadDate: new Date('2023-12-06T12:30:00Z'),
      }),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
