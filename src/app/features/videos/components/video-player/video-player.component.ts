import { DatePipe, Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { YouTubePlayer } from '@angular/youtube-player';

import { Video } from '../../../../shared/models/video.model';
import { VideoService } from '../../services/video.service';
import { VideoHttpService } from '../../services/video-http.service';

/**
 * Component for playing YouTube videos.
 */
@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [DatePipe, YouTubePlayer, MatIconModule, MatFabButton],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent implements OnInit {
  /**
   * Service to interact with the browser's URL.
   */
  private location = inject(Location);

  /**
   * Service to handle navigation within the app.
   */
  private router = inject(Router);

  /**
   * The ID of the video to be played, extracted from the route parameters.
   */
  videoId = inject(ActivatedRoute).snapshot.paramMap.get('id')!;

  video: Video = new Video({
    id: 'amTmnnqQf_E',
    title:
      'One Two Three | Learn Number | With Slide | Youtube Kids | NuNu Tv Nursery Rhymes  #kindergartensong',
    description:
      "Subscribe For New Kids Songs Every Week ►►\nhttps://www.youtube.com/c/NuNuTVNurseryRhymes?sub_confirmation=1\\n\\n#NuNuTv #NurseryRhymes #KidsSongs #BabySongs #ChildrenSongs #Rhymes #kidsvideos\n\nPopular Preschool Nursery Song for kids:\n\nFinger Family: https://www.youtube.com/watch?v=TiGGX_ndz9c\\n\\nRain Rain Go Away: https://www.youtube.com/watch?v=vIF6IKm00zk\\n\\nBaby Shark: https://www.youtube.com/watch?v=2KpggiN6BOQ\\n\\nHead Shoulders Knees & Toes: https://www.youtube.com/watch?v=qoSmI6W7lYc\\n\\nThree Little Pigs: https://www.youtube.com/watch?v=arJBWbLecCg\\n\\nFive Little Monkeys: https://www.youtube.com/watch?v=yTCGfk-a20s\\n\\nTen In The Bed: https://www.youtube.com/watch?v=3DFu5YgZ7EI\\n\\nWheels On The Bus: https://www.youtube.com/watch?v=1F5mrD5huvg\\n\\nAbc Phonics Song: https://www.youtube.com/watch?v=aTPZO1k-3OA\\n\\nOne Two Buckle My Shoe: https://www.youtube.com/watch?v=3Ef_hInl4Kg\\n\\n#kidSong #Songforkids #Singalong #SongsForBabies #toddlerSongs #kidscartoon \\n\\nNuNu Tv Nursery Rhymes ►\\n\\nAt NuNu Tv, Our main goal is to produce entertaining and educational 3D animated video kid's songs that make preschool moments relatable and fun for families. These videos help preschoolers learn important concepts such as letters, numbers, animal sounds, colours, and more.\\n\\nOur colourful animations and catchy songs showcase the common experiences of young children in their everyday lives. Our kids songs pass on prosocial life lessons, providing parents with an opportunity to teach and play with their children as they watch along.\\n\\nWe create songs for kids age six months to two years.\\n\\nNuNu Tv - where Kids can learn and enjoy.\\n\\n#PreschoolSong #NurserySong #KindergartenSong #KidsEducation #kidsEntertainment\\n\\nFollow us on Social Media:\\nFacebook: https://www.facebook.com/nunutvrhymes\\nInstagram: https://www.instagram.com/nunutvrhymes\\nTwitter: https://twitter.com/nunutvrhymes\\n\\nCopyright Sprout Studios Private Limited. All Rights Reserved.",
    thumbnail: {
      url: 'https://i.ytimg.com/vi/amTmnnqQf_E/hqdefault.jpg',
      height: 360,
      width: 480,
    },
    visibility: 'Public',
    author: 'NuNu Tv - Nursery Rhymes ',
    uploadDate: '2023-12-06T12:30:00Z',
  });

  constructor(
    private snackBar: MatSnackBar,
    private videoHttpService: VideoHttpService,
    private videoService: VideoService,
  ) {}

  ngOnInit(): void {
    this.setCurrentVideo();
  }

  private setCurrentVideo() {
    const allFetchedVideos = this.videoService.videos();
    const video = allFetchedVideos.find((v: Video) => v.id === this.videoId);
    if (video) {
      this.video = video;
    } else {
      // this.fetchVideosDetails();
    }
    console.log('VideoPlayer', this.video);
  }

  private fetchVideosDetails() {
    this.videoHttpService.fetchVideoDetails(this.videoId).subscribe({
      next: (video: Video[]) => {
        this.video = video[0];
        console.log(this.video);
      },
      error: (error: any) => {
        console.log(error);
        this.snackBar.open(error?.error?.error?.message ?? 'Something went wrong!', 'Okay');
      },
    });
  }

  /**
   * Navigates back to the previous page in the browser's history.
   */
  goBack() {
    this.location.back();
  }

  /**
   * Navigates to the home page of the application.
   */
  goHome() {
    this.router.navigateByUrl('/');
  }
}
