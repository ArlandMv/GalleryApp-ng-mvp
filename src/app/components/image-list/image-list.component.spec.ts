import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageListComponent } from './image-list.component';
import { ImageService } from 'src/app/services/image.service';
import { HttpClientModule } from '@angular/common/http';

describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ImageListComponent],
      providers: [ImageService],
    });
    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
